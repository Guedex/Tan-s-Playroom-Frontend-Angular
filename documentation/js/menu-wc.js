'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tutorial documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-fcaa5d47958e6677198910e976d047e4bc1151f0333e6eba488704caf940d0cf6d7ab9bd704ee99b1b9b4adf146b33a7703ec6b8e0d25855af0d97eea13eb97d"' : 'data-bs-target="#xs-components-links-module-AppModule-fcaa5d47958e6677198910e976d047e4bc1151f0333e6eba488704caf940d0cf6d7ab9bd704ee99b1b9b4adf146b33a7703ec6b8e0d25855af0d97eea13eb97d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fcaa5d47958e6677198910e976d047e4bc1151f0333e6eba488704caf940d0cf6d7ab9bd704ee99b1b9b4adf146b33a7703ec6b8e0d25855af0d97eea13eb97d"' :
                                            'id="xs-components-links-module-AppModule-fcaa5d47958e6677198910e976d047e4bc1151f0333e6eba488704caf940d0cf6d7ab9bd704ee99b1b9b4adf146b33a7703ec6b8e0d25855af0d97eea13eb97d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-f244314857197468db85b5aa5dc4076b8a7f448b141322ce68888ee6429bb1417c0c5dbb90cad9a00c460525fc8a5605c03e08d01b722bad7bf96fc9e370abd9"' : 'data-bs-target="#xs-components-links-module-AppServerModule-f244314857197468db85b5aa5dc4076b8a7f448b141322ce68888ee6429bb1417c0c5dbb90cad9a00c460525fc8a5605c03e08d01b722bad7bf96fc9e370abd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-f244314857197468db85b5aa5dc4076b8a7f448b141322ce68888ee6429bb1417c0c5dbb90cad9a00c460525fc8a5605c03e08d01b722bad7bf96fc9e370abd9"' :
                                            'id="xs-components-links-module-AppServerModule-f244314857197468db85b5aa5dc4076b8a7f448b141322ce68888ee6429bb1417c0c5dbb90cad9a00c460525fc8a5605c03e08d01b722bad7bf96fc9e370abd9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorModule.html" data-type="entity-link" >AuthorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthorModule-3d6b4a0da8381d31123352e8598f686461dc7bd0dcd3b77ed3e6a64fa2b4db2806aaaec4f6fe1a3827087d35a361e4d31a0d5e3f7d5f2e386d62c404a62b4ce3"' : 'data-bs-target="#xs-components-links-module-AuthorModule-3d6b4a0da8381d31123352e8598f686461dc7bd0dcd3b77ed3e6a64fa2b4db2806aaaec4f6fe1a3827087d35a361e4d31a0d5e3f7d5f2e386d62c404a62b4ce3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthorModule-3d6b4a0da8381d31123352e8598f686461dc7bd0dcd3b77ed3e6a64fa2b4db2806aaaec4f6fe1a3827087d35a361e4d31a0d5e3f7d5f2e386d62c404a62b4ce3"' :
                                            'id="xs-components-links-module-AuthorModule-3d6b4a0da8381d31123352e8598f686461dc7bd0dcd3b77ed3e6a64fa2b4db2806aaaec4f6fe1a3827087d35a361e4d31a0d5e3f7d5f2e386d62c404a62b4ce3"' }>
                                            <li class="link">
                                                <a href="components/AuthorEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CategoryModule-845a6db3e009348f3fa44502f59a348d555348cc9f994bf1386cc5f7185135bd8dcad0daa0118ffd12343cedabefeb02e367eae98a1b18d1c57fef90b923f8de"' : 'data-bs-target="#xs-components-links-module-CategoryModule-845a6db3e009348f3fa44502f59a348d555348cc9f994bf1386cc5f7185135bd8dcad0daa0118ffd12343cedabefeb02e367eae98a1b18d1c57fef90b923f8de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-845a6db3e009348f3fa44502f59a348d555348cc9f994bf1386cc5f7185135bd8dcad0daa0118ffd12343cedabefeb02e367eae98a1b18d1c57fef90b923f8de"' :
                                            'id="xs-components-links-module-CategoryModule-845a6db3e009348f3fa44502f59a348d555348cc9f994bf1386cc5f7185135bd8dcad0daa0118ffd12343cedabefeb02e367eae98a1b18d1c57fef90b923f8de"' }>
                                            <li class="link">
                                                <a href="components/CategoryEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ClientModule-c75f5288d49f409f3b6e73b47a3136fe208e219346d983144b19a1159d5f94dc4304a57323c898dffb71e9ca704ae0c59f106bb560a50e3bfba920a288347959"' : 'data-bs-target="#xs-components-links-module-ClientModule-c75f5288d49f409f3b6e73b47a3136fe208e219346d983144b19a1159d5f94dc4304a57323c898dffb71e9ca704ae0c59f106bb560a50e3bfba920a288347959"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientModule-c75f5288d49f409f3b6e73b47a3136fe208e219346d983144b19a1159d5f94dc4304a57323c898dffb71e9ca704ae0c59f106bb560a50e3bfba920a288347959"' :
                                            'id="xs-components-links-module-ClientModule-c75f5288d49f409f3b6e73b47a3136fe208e219346d983144b19a1159d5f94dc4304a57323c898dffb71e9ca704ae0c59f106bb560a50e3bfba920a288347959"' }>
                                            <li class="link">
                                                <a href="components/ClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-46a79b825cc8b14abb017a223a1dfa1694a3e4bb29cfbeb39d7150802fc5f49141fae4d78c05b9c9da8f3da8d4aef07b3d81097212491b2e625f39c9642ffa6a"' : 'data-bs-target="#xs-components-links-module-CoreModule-46a79b825cc8b14abb017a223a1dfa1694a3e4bb29cfbeb39d7150802fc5f49141fae4d78c05b9c9da8f3da8d4aef07b3d81097212491b2e625f39c9642ffa6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-46a79b825cc8b14abb017a223a1dfa1694a3e4bb29cfbeb39d7150802fc5f49141fae4d78c05b9c9da8f3da8d4aef07b3d81097212491b2e625f39c9642ffa6a"' :
                                            'id="xs-components-links-module-CoreModule-46a79b825cc8b14abb017a223a1dfa1694a3e4bb29cfbeb39d7150802fc5f49141fae4d78c05b9c9da8f3da8d4aef07b3d81097212491b2e625f39c9642ffa6a"' }>
                                            <li class="link">
                                                <a href="components/DialogConfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GameModule-2dc7f8a4417d19655904f02b76ef8164038d474c36b0a4efcfcfb06cf79e11952754731804a7f8d1373a2f6b79b8a61f62896453f8312d7ef5aae76e799c9b91"' : 'data-bs-target="#xs-components-links-module-GameModule-2dc7f8a4417d19655904f02b76ef8164038d474c36b0a4efcfcfb06cf79e11952754731804a7f8d1373a2f6b79b8a61f62896453f8312d7ef5aae76e799c9b91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GameModule-2dc7f8a4417d19655904f02b76ef8164038d474c36b0a4efcfcfb06cf79e11952754731804a7f8d1373a2f6b79b8a61f62896453f8312d7ef5aae76e799c9b91"' :
                                            'id="xs-components-links-module-GameModule-2dc7f8a4417d19655904f02b76ef8164038d474c36b0a4efcfcfb06cf79e11952754731804a7f8d1373a2f6b79b8a61f62896453f8312d7ef5aae76e799c9b91"' }>
                                            <li class="link">
                                                <a href="components/GameEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoanModule.html" data-type="entity-link" >LoanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoanModule-c05d814efa316d4b6348c21f284e00363ab0abe3558c44930a6e6552a42cc30c16ff9310833382a8678780a3ebbe88e415385168bc6f0edeab086a6084d2b908"' : 'data-bs-target="#xs-components-links-module-LoanModule-c05d814efa316d4b6348c21f284e00363ab0abe3558c44930a6e6552a42cc30c16ff9310833382a8678780a3ebbe88e415385168bc6f0edeab086a6084d2b908"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoanModule-c05d814efa316d4b6348c21f284e00363ab0abe3558c44930a6e6552a42cc30c16ff9310833382a8678780a3ebbe88e415385168bc6f0edeab086a6084d2b908"' :
                                            'id="xs-components-links-module-LoanModule-c05d814efa316d4b6348c21f284e00363ab0abe3558c44930a6e6552a42cc30c16ff9310833382a8678780a3ebbe88e415385168bc6f0edeab086a6084d2b908"' }>
                                            <li class="link">
                                                <a href="components/LoanEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoanEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoanListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoanListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorPage.html" data-type="entity-link" >AuthorPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClientPage.html" data-type="entity-link" >ClientPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Loan.html" data-type="entity-link" >Loan</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoanPage.html" data-type="entity-link" >LoanPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pageable.html" data-type="entity-link" >Pageable</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortPage.html" data-type="entity-link" >SortPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthorService.html" data-type="entity-link" >AuthorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoanService.html" data-type="entity-link" >LoanService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});