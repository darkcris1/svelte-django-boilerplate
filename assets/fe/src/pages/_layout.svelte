<script>
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
        Container,
    } from "sveltestrap";
    import FadeDecorator from "./_FadeDecorator.svelte";
    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<header>
    <Container>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Tactiv</NavbarBrand>
            <NavbarToggler on:click={() => (isOpen = !isOpen)} />
            <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
                <Nav class="ms-auto" navbar>
                    <NavItem>
                        <a href="/about" class="nav-link">About</a>
                    </NavItem>
                    <Dropdown nav inNavbar start>
                        <DropdownToggle nav caret>Options</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Collapse>
        </Navbar>
    </Container>
</header>
<Container>
    <slot decorator={FadeDecorator} />
</Container>
