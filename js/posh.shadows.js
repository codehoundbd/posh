$(document).ready(function() {
	$('.posh-shadow.standard').shadow();
	$('.posh-shadow.lifted').shadow('lifted');
	$('.posh-shadow.perspective').shadow('perspective');
	$('.posh-shadow.raised').shadow('raised');
	$('.posh-shadow.sides-vt-1').shadow({type:'sides',sides:'vt-1'});
	$('.posh-shadow.sides-vt-2').shadow({type:'sides',sides:'vt-2'});
	$('.posh-shadow.sides-hz-1').shadow({type:'sides',sides:'hz-1'});
	$('.posh-shadow.sides-hz-2').shadow({type:'sides',sides:'hz-2'});
	$('.posh-shadow.rotated').shadow({type:'rotated',rotate:'-5deg'});
});
