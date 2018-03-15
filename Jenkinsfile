pipeline {
  agent none
  stages {
    stage('installpgk') {
      steps {
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
}