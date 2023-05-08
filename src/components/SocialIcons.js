const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '22px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/Jeevan-12?tab=repositories"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Jeevan' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/jeevan-gowda-b-b83192267/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Jeevan' LinkedIn Profile"
        ></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/">
        <i
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Jeevan' Instagram Profile"
        ></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/home">
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Jeevan' Twitter Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
