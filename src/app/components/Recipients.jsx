import React from 'react';
import { connect } from 'react-redux';

const recipients = ({ recipients, username }) => {
  let joined = "";
  if ((typeof recipients) === "object") {
    // probably a private message (list of recipients)
    const names = recipients.map(r => r.full_name);
    if ((recipients.length === 1) && (recipients[0].email === username)) {
      joined = "You"
    } else {
      const index = recipients.map(r => r.email).indexOf(username);
      names.splice(index, 1);
      if (names.length === 1) {
        joined = names[0];
      } else {
        const last = names[names.length -1];
        const others = names.slice(0, -1).join(", ");
        joined = `${others} and ${last}`;
      }
    }
  } else {
    joined = recipients;
  }
  return <div>{joined}</div>;
}

export default connect(({ config }) => {
  return { username: config.username };
})(recipients);
