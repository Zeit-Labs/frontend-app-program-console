import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import SiteHeader from '@edx/frontend-component-header';
import SiteFooter from '@edx/frontend-component-footer';
import { IntlProvider, injectIntl } from '@edx/frontend-platform/i18n';

import ConnectedConsolePage from './console/ConsolePage';

function PageContent() {
  return (
    <div id="app" className="d-flex flex-column min-vh-100">
      <SiteHeader />
      <main className="flex-grow-1">
        <ConnectedConsolePage />
      </main>
      <SiteFooter />
    </div>
  );
}

const IntlPageContent = injectIntl(PageContent);

function App({ history }) {
  return (
    <IntlProvider>
      <ConnectedRouter history={history}>
        <IntlPageContent />
      </ConnectedRouter>
    </IntlProvider>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
