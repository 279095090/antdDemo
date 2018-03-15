pipeline {
  agent any
  stages {
    stage('installpgk'){
      steps{
        dir('./prodemo')
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