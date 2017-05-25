module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-27-120-28.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/ian.pem',
      ref: 'origin/master',
      repo: 'git@github.com:igm5007/commworkshop2017.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
