pipeline {
  agent any
  stages {
    stage('installpgk') {
      steps {
        dir(path: './prodemo')
        sh 'cnpm install'
      }
    }
    stage('test') {
      steps {
        sh 'cnpm test'
      }
    }
  }
}