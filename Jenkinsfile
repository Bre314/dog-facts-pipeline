pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Install & Test') {
      steps {
        script {
          docker.image('node:18').inside {
            sh 'echo "📁 Listing workspace files:" && ls -al'
            sh 'echo "📁 Listing backend contents:" && ls -al backend || echo "❌ backend not found"'
            sh 'cat backend/package.json || echo "❌ package.json missing"'
            sh 'npm install --prefix backend'
            sh 'npm test --prefix backend'
          }
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
