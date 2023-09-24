export function setupAnimation() {
    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.link .signup-link');
    const signInLink = document.querySelector('.link .signin-link');
  
    signUpLink.addEventListener('click', () => {
      wrapper.classList.add('animated-signin');
      wrapper.classList.remove('animated-signup');
    });
  
    signInLink.addEventListener('click', () => {
      wrapper.classList.add('animated-signup');
      wrapper.classList.remove('animated-signin');
    });
  }
  