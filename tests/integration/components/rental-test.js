import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders information about a rental property", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental />`);

    assert.dom("article").exists();
    assert.dom(".details h3").hasText("Grand Old Mansion");
    assert.dom(".detail.owner").includesText("Veruca Salt");
    assert.dom(".detail.type").includesText("Standalone");
    assert.dom(".detail.location").includesText("San Francisco");
    assert.dom(".detail.bedrooms").includesText("15");
    assert.dom("article .image").exists()
  });
});
