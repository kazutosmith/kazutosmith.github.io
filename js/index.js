$(document).ready(function () {

	music_list = {
		"1": "source_music/IVE - AFTER LIKE (Reverse).mp3",
		"2": "source_music/BP+AESPA - BLACK VENOM.mp3",
		"3": "source_music/RV - FEEL MY RHYTHM (Instr).mp3",
		"4": "source_music/ATEEZ - HALAZIA (Instr).mp3",
		"5": "source_music/NCT - STICKER (Short).mp3",
		"6": "source_music/SKZ - MANIAC (Reverse).mp3",
		"7": "source_music/DOJA + TWICE - KISS ME MORE ALCOHOL.mp3",
		"8": "source_music/BIB - VENGENCE (Short).mp3",
		"9": "source_music/BTS - RUN BTS (Short).mp3",
		"10": "source_music/BP - SHUTDOWN (Reverse).mp3",
		"11": "source_music/GIDLE - NUDE (Reverse).mp3",
		"12": "source_music/GIDLE - MY BAG (Instr).mp3",
		"13": "source_music/NJEANS - COOKIE (Short).mp3",
		"14": "source_music/ENHYPEN - FUTURE PERFECT (Reverse).mp3",
		"15": "source_music/XG COCONA - CYPHER.mp3",
		"16": "source_music/ITZY - SNEAKERS (Reverse).mp3",
		"17": "source_music/TWICE - TTT (Instr).mp3",
		"18": "source_music/SKZ - THUNDER MENU.mp3",
		"19": "source_music/TXT+BTS - RUN LOVER.mp3",
		"20": "source_music/ITZY - CHESHIRE (Short).mp3",
		"21": "source_music/GOT - STEP BACK (Instr).mp3",
		"22": "source_music/ITZY+LE SSERAFIM - LOCOFRAGILE.mp3",
		"23": "source_music/ARIANA + JEANS - 34+35+OMG.mp3",
		"24": "source_music/NAYEON - POP (Short).mp3",
		"25": "source_music/KDA - MORE (Instr).mp3",
		"26": "source_music/SVNTN - HOT (Short).mp3",
		"27": "source_music/PSYPINK - BOOMTHAT.mp3",
		"28": "source_music/ENHYPEN - DD (Instr).mp3",
		"29": "source_music/MMO - HIP (Short).mp3",
		"30": "source_music/C5 - CELEB (Reverse).mp3",
	}

	music_links = {
		"1": "https://youtu.be/F0B7HDiY-10?t=47",
		"2": "https://youtu.be/jiFBY6gk3Lk?list=PLQzMBnIjfuGFFlQaIGCh3KnYd2oINoxM5&t=188",
		"3": "https://youtu.be/R9At2ICm4LQ?t=105",
		"4": "https://youtu.be/SszP3hlQ55Y?t=55",
		"5": "https://youtu.be/1oYWnbTSang?t=133",
		"6": "https://youtu.be/OvioeS1ZZ7o?t=57",
		"7": "https://youtu.be/CQDrNfjf1K0?t=156",
		"8": "https://youtu.be/QfIY1r0_tRI?t=87",
		"9": "https://youtu.be/aqW4xXUgmno?t=108",
		"10": "https://youtu.be/POe9SOEKotk?t=54",
		"11": "https://youtu.be/fCO7f0SmrDc?t=49",
		"12": "https://youtu.be/Si5pQHRRH5w?t=65",
		"13": "https://youtu.be/VOmIplFAGeg?t=11",
		"14": "https://youtu.be/QMlNLo74mOw?t=62",
		"15": "https://youtu.be/-L4Visli9sA?t=12",
		"16": "https://youtu.be/Hbb5GPxXF1w?t=47",
		"17": "https://youtu.be/k6jqx9kZgPM?t=52",
		"18": "https://youtu.be/S9MS4CyVtZ8?list=PLQzMBnIjfuGFFlQaIGCh3KnYd2oINoxM5&t=63",
		"19": "https://youtu.be/IJ0pvoTcsNk?list=PLQzMBnIjfuGFFlQaIGCh3KnYd2oINoxM5&t=215",
		"20": "https://youtu.be/zugAhfd2r0g?t=68",
		"21": "https://youtu.be/uBY1AoiF5Vo?t=23",
		"22": "https://youtu.be/qUMvcyIixaM?list=PLQzMBnIjfuGFFlQaIGCh3KnYd2oINoxM5&t=42",
		"23": "https://youtu.be/LmvmTCQCQKk?list=PLQzMBnIjfuGFFlQaIGCh3KnYd2oINoxM5&t=58",
		"24": "https://youtu.be/f6YDKF0LVWw?t=20",
		"25": "https://youtu.be/Uvy_o058T40?t=52",
		"26": "https://youtu.be/gRnuFC4Ualw?list=PLKZ91-5pUEveAHsmVlmIHxmG54qQfYKlx&t=20",
		"27": "https://youtu.be/AAc5JLyfcbc?t=170",
		"28": "https://youtu.be/Fc7-Oe0tj5k?t=71",
		"29": "https://youtu.be/KhTeiaCezwM?list=RDQMytaqpfHlz60&t=95",
		"30": "https://youtu.be/4vHUj6LLdLo?t=75",

	}
	var block = $(".cards");

	for (var i = 1; i <= 30; i++) {
		block.append(`
		<div class="card">
			<h1 class="number">` + i + `</h1>
			<div class="t_button" active="1"></div>
			<div class="audio-box">
				<audio class="player" controls>
					<source src="` + music_list[i] + `" type="audio/mpeg">
					Your browser does not support the audio element.
				</audio>
				<a href="` + music_links[i] + `" target="_blank" >Answer</a>
			</div>
			
		</div>`);
	}

	$(".card").css("background", "#FDD835");

	$(".card").find(".player").prop("volume", 0.5)
	$(".card").find(".audio-box").css("opacity", "0");

	$(".card").hover(function () {
		$(this).find(".audio-box").animate({
			opacity: 100.0
		}, 300, 'linear');
	}, function () {
		$(this).find(".audio-box").animate({
			opacity: 0.0
		}, 200, 'linear');
	})

	$("#stop-all").click(function () {
		$('audio').each(function () {
			this.pause(); // Stop playing
			this.currentTime = 0; // Reset time
		});
	})

	$(".t_button").click(function () {

		if ($(this).attr("active") == "1") {
			$(this).css("background-color", "#ccc");
			$(this).parent().css("background", "#ccc");
			$(this).parent().find(".number").css("color", "#c2aaaa");
			$(this).attr("active", "0");
			$(this).parent().find(".audio-box").css("visibility", "hidden");
		} else {
			$(this).css("background-color", "#00E676");
			$(this).parent().css("background", "#FDD835");
			$(this).parent().find(".number").css("color", "#BA68C8");
			$(this).attr("active", "1");
			$(this).parent().find(".audio-box").css("visibility", "visible");
		}
	})

});