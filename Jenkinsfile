pipeline {
  agent any
  stages {
    stage('Change to workspace'){
      steps{
        dir('./prodemo')
      }
    }
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