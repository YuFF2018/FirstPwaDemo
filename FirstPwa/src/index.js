import dva from 'dva';
import { message } from 'antd'
import createHistory from 'history/createBrowserHistory';
import './index.css';

const history = createHistory()

// 1. Initialize
const app = dva({
    history,
    onError: e => message.error(e.message)
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
