const CF_ACCOUNT_ID = '3b5032bb4aa6f6f3cc65dd08f85d3645'
const CF_PROJECT_NAME = 'tv'
const CF_TOKEN = 'ohtStf0CCwqgOZ3Tw7zlx2bZaRCxb-7TQkvU3WCJ'
const CF_PREFIX = 'https://api.cloudflare.com/client/v4/accounts/'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getDeployments = async () =>
  (
    await (
      await fetch(
        `${CF_PREFIX}${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT_NAME}/deployments`,
        { headers: { Authorization: `Bearer ${CF_TOKEN}` } }
      )
    ).json()
  ).result

const groupByBranch = deployments => {
  const group = {}

  for (const deployment of deployments) {
    const { branch } = deployment.deployment_trigger.metadata

    if (!group[branch]) {
      group[branch] = []
    }

    group[branch].push(deployment)
  }

  return group
}

const deleteDeployment = async id => {
  const reponse = await fetch(
    `${CF_PREFIX}${CF_ACCOUNT_ID}/pages/projects/${CF_PROJECT_NAME}/deployments/${id}?force=true`,
    { method: 'DELETE', headers: { Authorization: `Bearer ${CF_TOKEN}` } }
  )
  const body = await reponse.json()

  if (!body.success) {
    console.error('删除失败：', body.errors)
  }
}

const _clearDeployments = async group => {
  for (const branch of Object.keys(group)) {
    const list = group[branch]
    // 按创建时间倒序（新→旧）
    list.sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
    const toDelete = list.slice(5)
    console.log(`分支[${branch}] 待删除数量：${toDelete.length}`)
    for (const dep of toDelete) {
      const { id, created_on } = dep
      console.log(`正在删除 ${id} | ${created_on}`)
      await deleteDeployment(id)
      await sleep(300)
    }
  }
}

const clearDeployments = async () => {
  // 1.获取所有部署
  const deployments = await getDeployments()
  // 2.按分支分组
  const group = groupByBranch(deployments)
  // 3.遍历每个分组，只保留最近 5 条
  await _clearDeployments(group)
  console.log(清理完成)
}

clearDeployments()
