import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental/image", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders the given image", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(
      hbs`<Rental::Image src="../../../assets/images/pixel-house.jpeg" alt="Teaching Tomster"/>`
    );

    assert.dom('.image').exists();
    assert.dom('.image img').hasAttribute('src', "../../../assets/images/pixel-house.jpeg");
    assert.dom('.image img').hasAttribute('alt', 'Teaching Tomster');
  });
});
