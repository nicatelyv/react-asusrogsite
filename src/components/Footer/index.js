import React from 'react'
import './style.scss'
function Footer() {
  return (
    <div className='footer'>
      <div id='footeritems'>
        <div id='f_items1'>
          <ul>
            <li><a href='!#'>ABOUT ROG</a></li>
            <li><a href='!#'>HOME</a></li>
            <li><a href='!#'>NEWSROOM</a></li>
            <li><a href='!#'>ACCESSIBILITY HELP</a></li>
          </ul>
          <div id='f_icons'>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-discord"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitch"></i>
          <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <hr></hr>
        <div id='f_items2'>
          <div id='footer_lang'>
          <i class="fa-solid fa-globe"></i>
          <a href='!#'>Global/English</a>
          </div>
            <ul>
              <li><a href='!#'>Terms of Use Notice</a></li>
              <li><a href='!#'>PRIVACY POLICY</a></li>
              <li><a href='!#'>©ASUSTeK Computer Inc. All rights reserved.</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer