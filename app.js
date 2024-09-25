const data = [
  {
    info: "Deploy to ECS with Fargate using Terraform",
    date: "Nov 3, 2023",
    link: "/guide/ecs-with-fargate-terraform"
  },
  {
    info: "IaaS vs PaaS vs SaaS",
    date: "Oct 24, 2023",
    link: "/guide/iaas-vs-paas-vs-saas"
  },
  {
    info: "Scalability for Dummies",
    date: "Sep 24, 2023",
    link: "/guide/scalability-for-dummies"
  },
  {
    info: "Load IP addresses for EC2 in Ansible Inventory",
    date: "Sep 6, 2023",
    link: "/guide/dynamically-load-ip-address-for-ec2-in-ansible"
  },
  {
    info: "Generate Terraform from existing AWS infrastructure",
    date: "Sep 6, 2023",
    link: "/guide/generate-terraform-from-infrastructure"
  },
  {
    info: "Setup and Install PostgreSQL Using Docker",
    date: "Apr 18, 2023",
    link: "/guide/setup-postgresql-using-docker"
  },
  {
    info: "Add Multiple SSH keys to an EC2 Server",
    date: "Apr 7, 2023",
    link: "/guide/add-ssh-key-to-remote-server"
  },
  {
    info: "How to push to a Different git Branch?",
    date: "Apr 7, 2023",
    link: "/guide/push-to-different-branch"
  },
  {
    info: "How to get Username and Group in Linux",
    date: "Apr 6, 2023",
    link: "/guide/how-to-get-username-and-group-linux"
  },
  {
    info: "Everything You Need to Know About DNS",
    date: "Mar 26, 2023",
    link: "/guide/everything-you-need-to-know-about-dns"
  },
  {
    info: "Change and Persist Hostname in Linux",
    date: "Mar 23, 2023",
    link: "/guide/change-hostname-in-linux"
  },
  {
    info: "Hassle-free Metabase Setup using Systemctl",
    date: "Mar 23, 2023",
    link: "/guide/setup-metabase-using-systemctl"
  },
  {
    info: "How to Monitor MySQL using Monit",
    date: "Mar 22, 2023",
    link: "/guide/monitor-mysql-using-monit"
  },
  {
    info: "Renaming Terraform Resources without Destroying",
    date: "Mar 22, 2023",
    link: "/guide/renaming-things-in-terraform"
  },
  {
    info: "Guide to Writing Semantic HTML",
    date: "Mar 17, 2023",
    link: "/guide/writing-semantic-html"
  },
  {
    info: "Guide to Picking a Language for DevOps",
    date: "Mar 15, 2023",
    link: "/guide/programming-language-for-devops"
  },
  {
    info: "Practical Guide to Port Knocking",
    date: "Mar 14, 2023",
    link: "/guide/port-knocking-explained"
  },
  {
    info: "How to Manage Secrets in Web Applications?",
    date: "Mar 14, 2023",
    link: "/guide/secret-management-best-practices"
  },
  {
    info: "systemctl vs service in Linux",
    date: "Mar 11, 2023",
    link: "/guide/systemctl-vs-service"
  },
  {
    info: "Lessons Learned About AWS Autoscaling",
    date: "Mar 8, 2023",
    link: "/guide/lessons-learned-about-aws-autoscaling"
  },
  {
    info: "Amazon ECS vs EKS: Which one to choose?",
    date: "Mar 7, 2023",
    link: "/guide/aws-ecs-vs-eks"
  },
  {
    info: "Chaos Engineering and why it Matters",
    date: "Mar 7, 2023",
    link: "/guide/chaos-engineering-and-why-it-matters"
  },
  {
    info: "Deep Dive into CSS Grid",
    date: "Mar 7, 2023",
    link: "/guide/deep-dive-into-css-grid"
  },
  {
    info: "Human Decision Making in UX Design",
    date: "Mar 7, 2023",
    link: "/guide/human-decision-making-in-ux"
  },
  {
    info: "Kubernetes and Cloud Cost Optimization",
    date: "Mar 7, 2023",
    link: "/guide/kubernetes-cloud-cost-optimizationo"
  },
  {
    info: "How to Measure and Improve DevOps Maturity?",
    date: "Mar 7, 2023",
    link: "/guide/measure-and-improve-devops-maturity"
  },
  {
    info: "Scale Up vs Scale Out",
    date: "Mar 7, 2023",
    link: "/guide/scale-up-vs-scale-out"
  },
  {
    info: "Where should I run my database on AWS?",
    date: "Feb 28, 2023",
    link: "/guide/database-on-aws"
  },
  {
    info: "Up and Running with AWS EC2",
    date: "Feb 25, 2023",
    link: "/guide/up-and-running-with-aws-ec2"
  },
  {
    info: "Up and Running with AWS VPC",
    date: "Feb 24, 2023",
    link: "/guide/up-and-running-with-aws-vpc"
  },
  {
    info: "Tune your Kubernetes Performance",
    date: "Feb 23, 2023",
    link: "/guide/tune-your-kubernetes-performance"
  },
  {
    info: "How to Understand and Influence Behavior",
    date: "Feb 22, 2023",
    link: "/guide/how-to-understand-and-influence-behavior"
  },
  {
    info: "TypeScript Cheatsheet",
    date: "Feb 22, 2023",
    link: "/guide/typescript-cheatsheet"
  },
  {
    info: "How does the Internet Work?",
    date: "Feb 16, 2023",
    link: "/guide/how-does-internet-work"
  },
  {
    info: "Networking 101",
    date: "Jan 29, 2023",
    link: "/guide/networking-101"
  },
  {
    info: "Android Development Best Practices",
    date: "Jan 27, 2023",
    link: "/guide/android-development-best-practices"
  },
  {
    info: "System Design: Latency vs Throughput",
    date: "Jan 19, 2023",
    link: "/guide/latency-vs-throughput"
  },
  {
    info: "Target nth element in Tailwind",
    date: "Jan 19, 2023",
    link: "/guide/target-nth-element-tailwind"
  },
  {
    info: "What makes a Good Junior Engineer?",
    date: "Jan 19, 2023",
    link: "/guide/what-makes-a-good-junior-engineer"
  },
  {
    info: "Consistency Patterns in Distributed Systems",
    date: "Jan 18, 2023",
    link: "/guide/consistency-patterns-week-strong-eventual"
  },
  {
    info: "All about Data Structures",
    date: "Jan 17, 2023",
    link: "/guide/all-about-datastructures"
  },
  {
    info: "What are Data Structures?",
    date: "Jan 17, 2023",
    link: "/guide/what-are-datastructures"
  },
  {
    info: "How to Learn AWS in 2023",
    date: "Jan 15, 2023",
    link: "/guide/how-to-learn-aws"
  },
  {
    info: "What's in a URL?",
    date: "Dec 12, 2022",
    link: "/guide/whats-in-a-url"
  },
  {
    info: "Web Development 101: A Guide for Beginners",
    date: "Nov 26, 2022",
    link: "/guide/web-development-101-beginners-guide"
  },
  {
    info: "Git Cheatsheet",
    date: "Mar 18, 2022",
    link: "/guide/git-cheatsheet"
  },
  {
    info: "Everything you need to know about HTTP",
    date: "Feb 16, 2021",
    link: "/guide/http-in-depth"
  }
];

renderHTML();
displayModeEvent();

function renderHTML() {
  let html = '';
  data.forEach(item => {
    html += `
      <a href="https://cs.fyi/${item.link}">
        <div class="content">
          <span class="content-name">${item.info}</span>
          <span class="content-date">${item.date}</span>
        </div>
      </a>
    `;
  })
  document.querySelector('.content-container').innerHTML = html;
};

function displayModeEvent() {
  let clicked = false;
  const buttonElement = document.querySelector('.display-mode-button');
  const buttonElementImage = document.querySelector('.display-mode-image')

  buttonElement.addEventListener('click', () => {
    const root = document.querySelector(':root');

    if (!clicked) {
      root.style.setProperty('--gray', 'rgb(80, 80, 80)');
      root.style.setProperty('--white', 'rgb(0, 0, 0)');
      document.body.style.backgroundColor = 'white';
      buttonElement.style.backgroundColor = 'black';
      buttonElementImage.src = 'images/moon.png';
      clicked = true;
      return;
    };
    root.style.setProperty('--gray', 'rgb(140, 140, 140)');
    root.style.setProperty('--white', 'rgb(240, 240, 240)');
    document.body.style.backgroundColor = 'black';
    buttonElement.style.backgroundColor = 'var(--white)';
    buttonElementImage.src = 'images/sun.png';
    clicked = false;
  });
};