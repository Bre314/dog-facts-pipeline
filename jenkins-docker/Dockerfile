# Start with the Jenkins LTS image
FROM jenkins/jenkins:lts

# Switch to root to install packages
USER root

# Install Node.js (v18) and Docker CLI
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y nodejs docker.io && \
    groupadd -g 20 docker || true && \
    usermod -aG docker jenkins && \
    chown -R jenkins:jenkins /var/jenkins_home

# Show versions for debugging
RUN node -v && npm -v && docker --version

# Switch back to Jenkins user
USER jenkins
