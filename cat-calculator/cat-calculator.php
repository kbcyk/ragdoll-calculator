<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://kbweb.dk
 * @since             1.0.0
 * @package           Cat_Calculator
 *
 * @wordpress-plugin
 * Plugin Name:       Cat Calculator
 * Plugin URI:        https://kbweb.dk
 * Description:       This Plugin is used for Ragdoll cat breeders this show both color and pattern prediction for litters to use: call [draegtighedstable],[monstertable],[farvetable],[advfarvetable]
 * Version:           1.0.0
 * Author:            Kristian Bendtsen
 * Author URI:        https://kbweb.dk
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cat-calculator
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
function custom_shortcode_scripts() {
    global $post;
    if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'draegtighedstable') ) {
		wp_enqueue_style( 'css-datepicker', plugin_dir_url( __FILE__ ) . '/lib/datepicker.min.css' );
		wp_enqueue_style( 'css-tables', plugin_dir_url( __FILE__ ) . '/lib/tablestyle.css' );
		wp_enqueue_script('js-jquery', plugin_dir_url( __FILE__ ) . '/lib/jquery.min.js', array(), '', true );
		wp_enqueue_script('js-datepicker', plugin_dir_url( __FILE__ ) . '/lib/datepicker.min.js', array(), '', true );
		wp_enqueue_script('js-scripts', plugin_dir_url( __FILE__ ) . '/lib/scripts.js', array(), '', true );
    }
}

add_action( 'wp_enqueue_scripts', 'custom_shortcode_scripts');

function draegtighedstable_shortcode() {
	return '
	<div class="row text-center">
	<div class="col-md-12"><h2 class="text-center">Drægtighedstabel</h2><br></div>
	<div class="col-md-6">
		<p class="font-serif">Brug parringskalenderen til at beregne den forventede fødselsdato på et kuld samt hvornår killingerne vil være gamle nok til at flytte hjemmefra.</p>
		<p class="font-weight-bold">Parrings dato:</p> <input class="center-block date text-center form-control input-lg" placeholder="Vælg dato ..." data-toggle="datepicker" type="datetime" id="datebirth" />
		<p></p>
		<p class="font-weight-bold">Forventet længde af drægtighed</p> 	
<select class="form-control center-block text-center input-lg" id="lengthday">
  <option value="62">62 dage</option>
  <option value="63">63 dage</option>
  <option selected value="64">64 dage</option>
  <option value="65">65 dage</option>
  <option value="66">66 dage</option>
  <option value="67">67 dage</option>
  <option value="68">68 dage</option>
</select>
			</div>
	<div class="col-md-6">
		<p class="font-weight-bold">Anslået fødselsdato:</p><h4 class="resultatcolor" id="result">Vælg dato</h4>
		<br>
		<p class="font-weight-bold">
			Tidligst salgsklar:</p><h4 class="resultatcolor" id="result3">Vælg dato</h4>

	</div>	
		<div class="col-md-12">
		<br>
			<h3>Drægtighedstidslinje</h3>
			<table width="100%" cellspacing="0" cellpadding="4" border="0">
			<tbody id="lifeline">		
			</tbody>
			</table>
		</div>
</div>
';
 }
add_shortcode( 'draegtighedstable', 'draegtighedstable_shortcode' );

// ############### monstertable  ##############

function monstertable_shortcode_scripts() {
    global $post;
    if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'monstertable') ) {
		wp_enqueue_style( 'css-tables', plugin_dir_url( __FILE__ ) . '/lib/tablestyle.css' );
		wp_enqueue_script('js-predictor', plugin_dir_url( __FILE__ ) . '/lib/predictor.js', array(), '', true );
    }
}

add_action( 'wp_enqueue_scripts', 'monstertable_shortcode_scripts');

function monstertable_shortcode() {
	return '
	<div class="row text-center">
	<div class="col-md-12 text-center">
		<h2 class="font-weight-bold">Mønster tabel</h2>
		<br>
	</div>
	<div class="col-sm-6 text-center">
	<p class="font-weight-bold">Hankat mønster </p>
		<select class="form-control center-block font-alt  input-lg" onchange="calcpattern()" id="pattern1" size="1">
			<option selected="">Colour</option>
			<option>Mitted</option>
			<option>Bicolour</option>
			<option>High Mitted Bicolour</option>
			<option>Mid High White Bicolour</option>
			<option>High White Bicolour</option>
		</select>
		</div>
		<div class="col-sm-6 text-center">
		<p class="font-weight-bold">Hunkat mønster </p>
		<select class="form-control center-block font-alt input-lg" onchange="calcpattern()" id="pattern2" size="1">
		<option selected="">Colour</option>
		<option>Mitted</option>
		<option>Bicolour</option>
		<option>High Mitted Bicolour</option>
		<option>Mid High White Bicolour</option>
		<option>High White Bicolour</option>
	</select>
	</div>
	<div class="col-md-12 text-center">
	<br>
		<p class="font-weight-bold">Forventede mønster</p>
		<h4 id="patternresult" class="font-alt resultatcolor">All Colour</h4>
	</div>
</div>';
 }

add_shortcode( 'monstertable', 'monstertable_shortcode' );

// ############### farvetable  ##############

function farvetable_shortcode_scripts() {
    global $post;
    if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'farvetable') ) {
		wp_enqueue_style( 'css-tables', plugin_dir_url( __FILE__ ) . '/lib/tablestyle.css' );
		wp_enqueue_script('js-predictor', plugin_dir_url( __FILE__ ) . '/lib/predictor.js', array(), '', true );
    }
}

add_action( 'wp_enqueue_scripts', 'farvetable_shortcode_scripts');

function farvetable_shortcode() {
	return '
	<div class="row text-center">
	<div class="col-md-12">
	<h3 class="font-alt font-weight-bold">Farve tabel</h3><br />
</div>
	<div class="col-md-6">
	<p class="font-weight-bold text-center">Hankat</p>
		<select name="select" id="colour1" class="center-block form-control font-alt input-lg" onchange="calccolour()">
			<option selected="">Ren Brun</option>
			<option>Brun bærer Blå</option>
			<option>Brun bærer Chocolate</option>
			<option>Brun bærer Blå &amp; Chocolate</option>
			<option>Ren Blå</option>
			<option>Blå bærer Chocolate</option>
			<option>Ren Chocolate</option>
			<option>Chocolate bærer Blå</option>
			<option>Lilla</option>
		</select>
		</div>

	<div class="col-md-6">
	<p class="font-weight-bold text-center">Hunkat</p>
		<select name="select2" size="1" id="colour2" class="center-block form-control font-alt input-lg" onchange="calccolour()">
			<option selected="">Ren Brun</option>
			<option>Brun bærer Blå</option>
			<option>Brun bærer Chocolate</option>
			<option>Brun bærer Blå &amp; Chocolate</option>
			<option>Ren Blå</option>
			<option>Blå bærer Chocolate</option>
			<option>Ren Chocolate</option>
			<option>Chocolate bærer Blå</option>
			<option>Lilla</option>
		</select>
	</div>
	<div class="col-md-12">
	<br>
	<p class="font-weight-bold">Forventede farve</p>
		<h4 id="colourresult" class="font-alt resultatcolor">All kittens will be pure SEAL</h4>
	</div>
</div>

';
 }
add_shortcode( 'farvetable', 'farvetable_shortcode' );

function redfarvetable_shortcode() {
	return '
<div class="row text-center">
<div class="col-md-12">
<h3 class="font-alt font-weight-bold">Rød farve tabel</h3><br />
</div>
<div class="col-md-6">
<p class="font-weight-bold text-center">Hankat</p>
<select name="select2" size="1" id="colour3" class="center-block form-control input-lg font-alt " onchange="calccolourred()">
	<option selected="">Rød (bærer ikke fortyndet)</option>
	<option>Rød (bærer fortyndet)</option>
	<option>Creme </option>
	<option>Brun (ikke bærer fortyndet)</option>
	<option>Brun  (bærer fortyndet)</option>
	<option>Blå </option>
</select>
</div>

<div class="col-md-6">
<p class="font-alt font-weight-bold text-center">Hunkat</p>
<select name="select2" size="1" id="colour4" class="center-block form-control font-alt input-lg " onchange="calccolourred()">
	<option selected="">Brun  (ikke bærer fortyndet)</option>
	<option>Brun (bærer fortyndet)</option>
	<option>Blå </option>
	<option>Brun Tortie (ikke bærer fortyndet)</option>
	<option>Brun Tortie (bærer fortyndet)</option>
	<option>Blå Tortie </option>
	<option>Rød (ikke bærer fortyndet)</option>
	<option>Rød (bærer fortyndet)</option>
	<option>Creme </option>
</select>
</div>
<div class="col-md-12">
<br>
<p class="font-weight-bold">Forventede farve</p>
<h4 id="colourresultred" class="font-alt resultatcolor">All the males will be SEAL ; All the females will be SEAL TORTIE </h4>
</div>
</div>

';
 }
add_shortcode( 'redfarvetable', 'redfarvetable_shortcode' );

//Advanced

function advfarvetable_shortcode_scripts() {
    global $post;
    if( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'farvetable') ) {
		wp_enqueue_style( 'css-tables', plugin_dir_url( __FILE__ ) . '/lib/tablestyle.css' );
		wp_enqueue_script('js-advpredictor', plugin_dir_url( __FILE__ ) . '/lib/newpredictor.js', array(), '', true );
    }
}

add_action( 'wp_enqueue_scripts', 'advfarvetable_shortcode_scripts');

function advfarvetable_shortcode() {
	return '
	<div class="col-md-12">
		<h3 class="font-alt text-center font-weight-bold">Advanceret Farvetabel</h3><br />
	</div>
	<div class="col-md-6">
		<h5 class="font-alt font-weight-bold text-center">MALE</h5>
		<hr />
		<label>Color</label>
		<select onchange="updateMaleGenes();updateColourResult();" id="MaleColour" class="form-control font-alt ">
			<option selected="">Seal</option>
			<option>Blue</option>
			<option>Red</option>
			<option>Chocolate</option>
			<option>Lilac</option>
			<option>Cream</option>
		</select>
		<label>Dilute</label>
		<select onchange="updateColourResult();" class="form-control font-alt " id="MaleDilute">
			<option value="NotCarrying">Not carrying</option>
			<option value="Carrying">Carrying</option>
			<option value="Unknown">Dont know</option>
		</select>
		<label>Chocolate</label>
		<select onchange="updateColourResult();" class="form-control font-alt " id="MaleBrown">
			<option value="NotCarrying">Not carrying</option>
			<option value="Carrying">Carrying</option>
			<option value="Unknown">Dont know</option>
		</select>
	</div>

	<div class="col-md-6">
		<h5 class="font-alt font-weight-bold text-center">FEMALE</h5>
		<hr />
		<label for="FemaleColour">Color</label>
		<select onchange="updateFemaleGenes();updateColourResult();" class="form-control font-alt " id="FemaleColour">
			<option selected="">Seal</option>
			<option>Blue</option>
			<option>Red</option>
			<option>Chocolate</option>
			<option>Lilac</option>
			<option>Cream</option>
		</select>
		<label>Dilute</label>
		<select onchange="updateColourResult();" class="form-control font-alt " id="FemaleDilute">
			<option value="NotCarrying">Not carrying</option>
			<option value="Carrying">Carrying</option>
			<option value="Unknown">Dont know</option>
		</select>
		<label>Chocolate</label>
		<select onchange="updateColourResult();" class="form-control font-alt " id="FemaleBrown">
			<option value="NotCarrying">Not carrying</option>
			<option value="Carrying">Carrying</option>
			<option value="Unknown">Dont know</option>
		</select>
		<br />
		<label id="TortieLabel">Tortie:</label>
		<input onchange="updateColourResult();" id="FemaleTortie" type="checkbox">
	</div>
	<div class="col-md-12">
		<span id="ColourResult">
			<table width="100%" cellspacing="0" cellpadding="2">
				<tbody>
					<tr bgcolor="#0066CC">
						<td width="50%" bordercolor="#1963AE" bgcolor="#eee" colspan="1"><div align="center"><span>Seal, not carrying dilute and not carrying chocolate</span></div></td>
						<td width="50%" bordercolor="#1963AE" bgcolor="#eee" colspan="1"><div align="center"><span>Seal, not carrying dilute and not carrying chocolate</span></div></td>
					</tr>
					<tr bgcolor="#0066CC">
						<td width="50%" bordercolor="#1963AE" bgcolor="#eee" colspan="1"><div align="center"><span><h4 class="font-alt">Han killinger</h4></span></div></td>
						<td width="50%" bordercolor="#1963AE" bgcolor="#eee" colspan="1"><div align="center"><span><h4 class="font-alt">Hun killinger</h4></span></div></td>
					</tr>
					<tr bgcolor="#0066CC">
						<td width="50%" bordercolor="#1963AE" bgcolor="#fff" colspan="1">
							<div align="center">
								<span>
									Seal
								</span>
							</div>
						</td>
						<td width="50%" bordercolor="#1963AE" bgcolor="#fff" colspan="1">
							<div align="center">
								<span>
									Seal
								</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</span>
	</div>
';
 }
add_shortcode( 'advfarvetable', 'advfarvetable_shortcode' );
