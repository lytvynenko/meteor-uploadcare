
Package.describe(
	{
		summary: "Uploadcare handles uploads, so you don’t have to.",
		version: "2.5.1",
		name: "lytvynenko:uploadcare",
		git: "https://github.com/lytvynenko/meteor-uploadcare.git"
	}
);

Package.on_use(function(api)
	{
		api.versionsFrom('0.9.0');
		api.add_files([ "lib/uploadcare.min.js" ], ["client"]);
	}
);