import React from 'react'
import { StyledSideMenu, ActionForm } from './styledcss/general'
import MenuItem from './MenuItem'
import dalogo from '../assets/dispatchlogo.png'

const SideMenu = () => {
  return (
    <StyledSideMenu>
      <h2><img src={dalogo} alt="logo"/> Dispatcher Assistant</h2>

      <h3>Recommended Incident Level & Response</h3>
      <div className="action-block">
        <ActionForm>
            <div className="row">
              <label for="response-level">Response Level</label>
              <input id="response-level"/>
            </div>
            <div className="row">
              <label for="incident-type">Incident Type</label>
              <input id="incident-type"/>
            </div>
            <div className="row">
              <label for="location">Location</label>
              <input id="location"/>
            </div>
          </ActionForm>
      </div>

      <h3>Incident Information</h3>
      <div className="action-block">
        <ActionForm>
          <div className="row">
            <label for="response-level">Response Level</label>
            <input id="response-level"/>
          </div>
          <div className="row">
            <label for="incident-type">Incident Type</label>
            <input id="incident-type"/>
          </div>
          <div className="row">
            <label for="location">Location</label>
            <input id="location"/>
          </div>
          <div className="row notes">
            <label for="inc-notes">Incident notes</label>
            <textarea id="inc-notes"/>
          </div>
        </ActionForm>
    </div>

      <div className="menu-blocks">
        <MenuItem name="Open Transcript" status=""/>
        <MenuItem name="asdsafdff" status=""/>
        <MenuItem name="afdfdfdfdfda" status=""/>
        <MenuItem name="Language Assistant" status=""/>
      </div>
    </StyledSideMenu>
  )
}

export default SideMenu