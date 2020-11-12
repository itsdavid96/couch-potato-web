<NavBar></NavBar>
<style>
  .signup-button p {
    line-height: 1.5;
    text-align: center;
    color: #fefefe;
    margin-top: 10%;
  }
</style>


<h1>
  Sign In
</h1>
<div class=" signup-button">
  <LinkTo @route="sign-up"><p>Not registered yet? Sign up here</p></LinkTo>
</div>


{{outlet}}
