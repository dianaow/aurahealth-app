<script lang="ts">
  import { page } from '$app/stores'

  const formId = import.meta.env.VITE_JOTFORM_FORM_ID;

  let userId = '';
  let jotFormUrl = `https://form.jotform.com/${formId}`;
  let embedUrl = '';
  
  $: ({ userId } = $page.data);

  // Update embedUrl when userId changes
  $: {
    if (userId !== '') {
      embedUrl = `${jotFormUrl}?userId=${userId}`;
    } else {
      embedUrl = jotFormUrl;
    }
  }
</script>

<div class="form-container">
  <iframe
  class="form-iframe"
  id="JotFormIFrame-241954188732465"
  title="Feedback Form"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allow="geolocation; microphone; camera; fullscreen"
  src={embedUrl}
  frameborder="0"
  style="min-width:100%;max-width:100%;height:539px;border:none;"
  scrolling="no"
  >
  </iframe>
</div>
