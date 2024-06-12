import * as jsTokens from './js/tokens';

export const bootstrap = () => {
    import('./css/tokens.css');
    return jsTokens;
};
