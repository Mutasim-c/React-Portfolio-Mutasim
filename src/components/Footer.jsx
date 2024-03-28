const Styles = {
  footer: { 
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50px',
  }
}

export default function Footer() {
    return (
      <footer style={Styles.footer}>
        <a href="https://github.com/Mutasim-c">My Github</a>
      </footer>
    );
  }