<script lang="ts">
    import { Container, FormGroup, Input, Label } from "sveltestrap";

</script>
<style lang="scss">
    .grid-cols-2  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        row-gap: 32px;
    }

    :global(input::placeholder) {
        color: white;
        background: darkgoldenrod;
    }
</style>
<Container>

    <div class="grid-cols-2">
        <FormGroup>
            <Label>This is groot</Label>
            <Input placeholder="This is groot" />
        </FormGroup>
        <FormGroup>
            <Label>This is groot</Label>
            <Input placeholder="This is groot" />
        </FormGroup>
        <FormGroup>
            <Label>This is groot</Label>
            <Input placeholder="This is groot" />
        </FormGroup>
        <FormGroup>
            <Label>This is groot</Label>
            <Input placeholder="This is groot" />
        </FormGroup>
    </div>

</Container>