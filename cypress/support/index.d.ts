
import './commands';

declare namespace Cypress {
    interface Chainable<E> {
        login(email: string, pw: string): Chainable<Element>
    }
}
