<script lang="js">
    export let multi_line;
    export let post_result;

    let hidden_value = post_result === undefined ? multi_line : post_result;
</script>

<h1>Welcome to SvelteKit</h1>
<h3>post_result</h3>
<pre>{JSON.stringify(post_result)}</pre>
<h3>hidden_value</h3>
<pre>{JSON.stringify(hidden_value)}</pre>
<form method="POST">
    <input type="hidden" name="hidden_value" value={hidden_value} />
    <button type="submit">
        Submit
    </button>
</form>
