<script src="/scripts/gen_validatorv2.js"
type="text/javascript"></script>
 
<form id="myform" action="handle-data.php">
Search: <input type='text' name='query' />
<A href="javascript: submitform()">Search</A>
</form>
 
<!-- Add validations to the form-->
<script type="text/javascript">
var myformValidator = new Validator("myform");
myformValidator.addValidation("query","req",
        "Please enter the value for query");
</script>
 
<!-- The function that submits the form-->
<script type="text/javascript">
function submitform()
{
 if(document.myform.onsubmit())
 {//this check triggers the validations
    document.myform.submit();
 }
}
</script>
