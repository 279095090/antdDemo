pipeline {
  agent any
  stages {
    stage('installpgk') {
      steps {
        sh 'cd ./prodemo && cnpm install'
      }
    }
    stage('test') {
      steps {
        sh 'cd ./prodemo && npm test'
      }
    }
  }
}