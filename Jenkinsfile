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
                // Execute the ansible playbook
                sh """
                echo "Starting SSH Agent and adding key..."
                eval \$(ssh-agent -s) > /dev/null
                ssh-add /usr/.ssh/ansible
                ansible-playbook -i /usr/inventory --key-file /usr/.ssh/ansible ansible.yaml
                """
            }
        }
    }
}
