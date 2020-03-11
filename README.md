## Getting Setup

<strong>Install plugin</strong>
[Remote Container For VSCode](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)<br/>
[Docker Setup](https://github.com/btholt/complete-intro-to-containers#getting-set-up)

## Git Repo and Branches

[Repo URL](https://github.com/DhawanRachakonda/react-dev-camp2020)

<p>
<div>Branch <strong><code>master</code></strong> conatins all prerequisites</div>
<div>Branch <strong><code>feature/react-redux</code></strong> contains entire solution for this camp</div>
<h3>Checkout process</h3>
<code>git clone https://github.com/DhawanRachakonda/react-dev-camp2020.git</code><br/>
<code>git checkout feature/react-redux</code>
</p>

[More Info On Project](https://github.com/DhawanRachakonda/react-dev-camp2020/blob/master/DOC.md)

## Docker

<code>sudo docker build -t react-dev-camp .<code><br/>
<code>sudo docker run --init --rm -d -p 80:80 react-dev-camp</code>

### Kill Docker process

<code>docker ps <container_id></code>
