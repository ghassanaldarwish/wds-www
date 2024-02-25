pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('DOCKER_USERNAME')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    sh "echo 'DOCKER_USERNAME=${DOCKER_USERNAME}' > .env"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Execute the ansible tasks from .PHONY target
                sh """
                cd ansible/03-wds-www && \
                ansible-playbook -i ../inventory --key-file /usr/.ssh/ansible main.yaml 
                """
            }
        }
    }
}
