pipeline {
    agent {
        docker {
            image 'jenkins-node-docker'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Test Git Checkout') {
            steps {
                sh 'echo "Checking repo contents..."'
                sh 'ls -la'
                sh 'git rev-parse --is-inside-work-tree || echo "❌ Not a Git repo"'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t dog-facts-backend .'
                }
            }
        }
    }
}
