pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Install & Test') {
      agent {
        docker {
          image 'node:18'
        }
      }
      steps {
        dir('backend') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }

    stage('Build Docker') {
      steps {
        sh 'docker build -t dog-facts-app .'
      }
    }

    stage('Postman Tests') {
      steps {
        sh 'newman run postman/DogFacts.postman_collection.json'
      }
    }
  }
}
