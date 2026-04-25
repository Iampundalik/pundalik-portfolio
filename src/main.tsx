import { StrictMode, Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

class Boundary extends Component<{ children: ReactNode }, { err: Error | null; info: string }> {
  state = { err: null as Error | null, info: '' };
  static getDerivedStateFromError(err: Error) { return { err, info: '' }; }
  componentDidCatch(err: Error, info: ErrorInfo) {
    this.setState({ err, info: info.componentStack || '' });
    console.error('[Boundary]', err, info);
  }
  render() {
    if (this.state.err) {
      return (
        <pre style={{ color: '#ff6b35', padding: 20, background: '#0a131c', fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: 12 }}>
          ERROR: {String(this.state.err?.message)}
          {'\n\n'}
          STACK: {this.state.err?.stack?.slice(0, 1500)}
          {'\n\n'}
          COMPONENT: {this.state.info?.slice(0, 1000)}
        </pre>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Boundary>
      <App />
    </Boundary>
  </StrictMode>
);
