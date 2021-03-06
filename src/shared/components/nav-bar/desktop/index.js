import React, { Component } from 'react'
import classNames from 'classnames'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Link from 'shared/components/link'
import styles from './index.module.css'
import GitHubButton from 'react-github-btn'

class DesktopNavBar extends Component {
  render () {
    const { isSticky, intl: { messages } } = this.props
    const navBarClasses = classNames(styles.container,
      {
        [styles.sticky]: isSticky
      })

    return (
      <div className={ navBarClasses } >
        <div className={ styles.navBarMenu }>
          <div className={ styles.link } onClick={ this.handleGettingStartedClick }> { messages.navBar.item1 } </div>
          <Link>
            { messages.navBar.item2 }
          </Link>
          <Link>
            { messages.navBar.item3 }
          </Link>
          <Link>
            { messages.navBar.item4 }
          </Link>
          <Link>
            { messages.navBar.item5 }
          </Link>
          <div className={ styles.starContainer }>
            <GitHubButton href="https://github.com/alto-io/game3.js" data-size="large" aria-label="Star alto-io/game3.js on GitHub">Star</GitHubButton>
        </div>
        </div>
      </div>
    )
  }

  handleGettingStartedClick = () => {
    this.props.onGoToGettingStarted()
  }
}

DesktopNavBar.propTypes = {
  isSticky: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  onGoToGettingStarted: PropTypes.func
}

export default injectIntl(DesktopNavBar)
