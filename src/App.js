import React, { Component } from 'react';
import './scss/styles.scss'
import './App.scss'
import Banner1 from './img/Banner01.jpg'
import Banner2 from './img/Banner02.jpg'
import Logo from './img/drone-logo.svg'
import { fetchRepos } from './redux/actions'
import { connect } from 'react-redux'
import UserSearch from './components/UserSearch';
import ScrollUpButton from "react-scroll-up-button";


class App extends Component {

  onInputChange = () => event => {
    this.props.fetchRepos(event.target.value)
  }

  render() {
    return (
      <div>
      <nav className="navbar navbar-black navbar-color-on-scroll" color-on-scroll="200" role="navigation">
        <img src={Logo} className="img-responsive" width="132" height="35"/>
        {/* <div className="logo" /> */}
    </nav>
    <div className="container-fluid">
      <div className="container banner-img">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 align-center">
          <img src={Banner1} className="img-responsive"/>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <h1 className="heading-1">
          Aerial shot collection - the greatest forests in the world
          </h1>
          <div className="sub-heading--quote">
            Bacon ipsum dolor amet shankle chuck pork chop corned beef kevin. Drumstick sausage shankle boudin beef ribs turkey corned beef. Prosciutto turkey short loin landjaeger pork belly shank meatloaf ham salami.
          </div>
          <div className="page-content">
          <p>Meatloaf brisket turducken leberkas prosciutto shank meatball, strip steak kielbasa drumstick beef ribs biltong tail. Pancetta short loin tri-tip, tail ribeye beef cupim shoulder chicken jerky. Pancetta turkey bresaola frankfurter shoulder cupim pork chop meatloaf cow alcatra. Bacon porchetta cupim jerky, salami ribeye alcatra. Landjaeger ham ball tip, pork shank pastrami pancetta beef ribs boudin swine pork chop t-bone. Turkey cupim shank fatback turducken kevin.</p>
          <p>Corned beef buffalo sausage kevin, brisket prosciutto t-bone alcatra shank cow rump pork swine turkey. Pancetta ground round ball tip alcatra leberkas biltong sirloin shankle drumstick short loin spare ribs picanha jerky chicken rump. Salami jerky brisket ham cupim, picanha kevin ground round pastrami. Jowl short ribs doner turkey pork belly strip steak. Ball tip shankle ham, short ribs landjaeger venison salami chuck.</p>
          <p>Shankle salami drumstick, pork alcatra pork chop cupim ground round turducken. Leberkas ham kielbasa kevin pastrami porchetta pig. Tenderloin pork loin hamburger alcatra pancetta ribeye prosciutto swine. Swine pastrami doner, pig drumstick bacon beef ribs sirloin. Picanha pork pork belly, short ribs pork loin fatback boudin shoulder salami brisket shank. Tongue jerky cupim turducken kevin picanha turkey frankfurter filet mignon strip steak pork belly brisket boudin. Rump picanha frankfurter pastrami sirloin pancetta shoulder cow capicola.</p>
          <p>Filet mignon ribeye tongue venison. Cow doner pork chop shoulder porchetta. Biltong porchetta pancetta rump pork belly tenderloin. Rump andouille tail ball tip, prosciutto burgdoggen pork belly tenderloin flank pork loin. Sirloin doner tail landjaeger ham hock meatball flank, cupim fatback pastrami bacon picanha. Shank capicola leberkas cupim burgdoggen meatloaf pork chop short loin boudin pancetta, ham ball tip alcatra pig short ribs.</p>
          <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
            <img src={Banner2} className="img-responsive" />
        </div>
      </div>
    </div>
    <div className="container">
    <div className="row">
    <div className="col-md-6 col-xs-6 col-sm-6" >
    <h4>Search By Name</h4>
    <div className="form-group">
          <input
          placeholder="Enter a User's name"
          onChange={this.onInputChange()}
          type='text'
          className="form-control"
        />
      </div>
    </div>
      
    </div>
    <div className="row">
    <div className="col-md-12 col-xs-12 col-sm-12">
    <div className="table-responsive">
        <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Private</th>
                  <th>Link</th>
                  <th className="text-right">Size</th>
              </tr>
          </thead>
          <tbody>
            <UserSearch repos={this.props.repos} />
          </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
    <footer className="footer">
      <div>Copyright © 2018 Drone.ai. All Rights Reserved.</div>
    </footer>
       <ScrollUpButton
          ContainerClassName="back-to-top"
          TransitionClassName="transition"
        >
        <div className="icon-arrow">
          &nbsp;
        </div>
      </ScrollUpButton>
      </div>
    );
  }
}

const mapStateToProps = ({ repos }) => ({
  repos
})
export default connect(mapStateToProps, { fetchRepos })(App)

