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

                // Start SSH agent and add key
                sh """
                echo "Starting SSH Agent and adding key..."
                eval \$(ssh-agent -s) > /dev/null
                ssh-add /home/ghassan/.ssh/ansible
                """

                // Execute the ansible playbook
                sh """
                ansible-playbook -i /usr/inventory --key-file /usr/.ssh/ansible ansible.yaml
                """
            }
        }
    }
}
