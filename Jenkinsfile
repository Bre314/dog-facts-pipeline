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
            // 🔍 DEBUG: Show contents of workspace
            sh 'echo "🔍 Listing top-level workspace files:"'
            sh 'ls -al'
            sh 'echo "🔍 Listing contents of backend directory:"'
            sh 'ls -al backend || echo "❌ backend directory not found!"'

            // ✅ Install dependencies and run tests
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
