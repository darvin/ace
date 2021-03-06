define(function(require, exports, module) {"use strict";module.exports = function(){ return {

"abap": {mode: require("./abap").Mode, highlightRules:require("./abap_highlight_rules").AbapHighlightRules, regex:null},
"actionscript": {mode: require("./actionscript").Mode, highlightRules:require("./actionscript_highlight_rules").ActionScriptHighlightRules, regex:null},
"ada": {mode: require("./ada").Mode, highlightRules:require("./ada_highlight_rules").AdaHighlightRules, regex:null},
"asciidoc": {mode: require("./asciidoc").Mode, highlightRules:require("./asciidoc_highlight_rules").AsciidocHighlightRules, regex:null},
"assembly_x86": {mode: require("./assembly_x86").Mode, highlightRules:require("./assembly_x86_highlight_rules").AssemblyX86HighlightRules, regex:null},
"autohotkey": {mode: require("./autohotkey").Mode, highlightRules:require("./autohotkey_highlight_rules").AutoHotKeyHighlightRules, regex:null},
"batchfile": {mode: require("./batchfile").Mode, highlightRules:require("./batchfile_highlight_rules").BatchFileHighlightRules, regex:null},
"c9search": {mode: require("./c9search").Mode, highlightRules:require("./c9search_highlight_rules").C9SearchHighlightRules, regex:null},
"c_cpp": {mode: require("./c_cpp").Mode, highlightRules:require("./c_cpp_highlight_rules").c_cppHighlightRules, regex:null},
"clojure": {mode: require("./clojure").Mode, highlightRules:require("./clojure_highlight_rules").ClojureHighlightRules, regex:null},
"cobol": {mode: require("./cobol").Mode, highlightRules:require("./cobol_highlight_rules").CobolHighlightRules, regex:null},
"coffee": {mode: require("./coffee").Mode, highlightRules:require("./coffee_highlight_rules").CoffeeHighlightRules, regex:null},
"coldfusion": {mode: require("./coldfusion").Mode, highlightRules:require("./coldfusion_highlight_rules").ColdfusionHighlightRules, regex:null},
"csharp": {mode: require("./csharp").Mode, highlightRules:require("./csharp_highlight_rules").CSharpHighlightRules, regex:null},
"css": {mode: require("./css").Mode, highlightRules:require("./css_highlight_rules").CssHighlightRules, regex:null},
"curly": {mode: require("./curly").Mode, highlightRules:require("./curly_highlight_rules").CurlyHighlightRules, regex:null},
"d": {mode: require("./d").Mode, highlightRules:require("./d_highlight_rules").DHighlightRules, regex:null},
"dart": {mode: require("./dart").Mode, highlightRules:require("./dart_highlight_rules").DartHighlightRules, regex:null},
"diff": {mode: require("./diff").Mode, highlightRules:require("./diff_highlight_rules").DiffHighlightRules, regex:null},
"dot": {mode: require("./dot").Mode, highlightRules:require("./dot_highlight_rules").DotHighlightRules, regex:null},
"erlang": {mode: require("./erlang").Mode, highlightRules:require("./erlang_highlight_rules").ErlangHighlightRules, regex:null},
"forth": {mode: require("./forth").Mode, highlightRules:require("./forth_highlight_rules").ForthHighlightRules, regex:null},
"ftl": {mode: require("./ftl").Mode, highlightRules:require("./ftl_highlight_rules").FtlHighlightRules, regex:null},
"glsl": {mode: require("./glsl").Mode, highlightRules:require("./glsl_highlight_rules").glslHighlightRules, regex:null},
"golang": {mode: require("./golang").Mode, highlightRules:require("./golang_highlight_rules").GolangHighlightRules, regex:null},
"groovy": {mode: require("./groovy").Mode, highlightRules:require("./groovy_highlight_rules").GroovyHighlightRules, regex:null},
"haml": {mode: require("./haml").Mode, highlightRules:require("./haml_highlight_rules").HamlHighlightRules, regex:null},
"haskell": {mode: require("./haskell").Mode, highlightRules:require("./haskell_highlight_rules").HaskellHighlightRules, regex:null},
"haxe": {mode: require("./haxe").Mode, highlightRules:require("./haxe_highlight_rules").HaxeHighlightRules, regex:null},
"html": {mode: require("./html").Mode, highlightRules:require("./html_highlight_rules").HtmlHighlightRules, regex:null},
"html_ruby": {mode: require("./html_ruby").Mode, highlightRules:require("./html_ruby_highlight_rules").HtmlRubyHighlightRules, regex:null},
"ini": {mode: require("./ini").Mode, highlightRules:require("./ini_highlight_rules").IniHighlightRules, regex:null},
"jade": {mode: require("./jade").Mode, highlightRules:require("./jade_highlight_rules").JadeHighlightRules, regex:null},
"java": {mode: require("./java").Mode, highlightRules:require("./java_highlight_rules").JavaHighlightRules, regex:null},
"javascript": {mode: require("./javascript").Mode, highlightRules:require("./javascript_highlight_rules").JavaScriptHighlightRules, regex:"(?:javascript|js)"},
"json": {mode: require("./json").Mode, highlightRules:require("./json_highlight_rules").JsonHighlightRules, regex:null},
"jsp": {mode: require("./jsp").Mode, highlightRules:require("./jsp_highlight_rules").JspHighlightRules, regex:null},
"jsx": {mode: require("./jsx").Mode, highlightRules:require("./jsx_highlight_rules").JsxHighlightRules, regex:null},
"julia": {mode: require("./julia").Mode, highlightRules:require("./julia_highlight_rules").JuliaHighlightRules, regex:null},
"latex": {mode: require("./latex").Mode, highlightRules:require("./latex_highlight_rules").LatexHighlightRules, regex:null},
"less": {mode: require("./less").Mode, highlightRules:require("./less_highlight_rules").LessHighlightRules, regex:null},
"liquid": {mode: require("./liquid").Mode, highlightRules:require("./liquid_highlight_rules").LiquidHighlightRules, regex:null},
"lisp": {mode: require("./lisp").Mode, highlightRules:require("./lisp_highlight_rules").LispHighlightRules, regex:null},
"logiql": {mode: require("./logiql").Mode, highlightRules:require("./logiql_highlight_rules").LogiQLHighlightRules, regex:null},
"lsl": {mode: require("./lsl").Mode, highlightRules:require("./lsl_highlight_rules").LSLHighlightRules, regex:null},
"lua": {mode: require("./lua").Mode, highlightRules:require("./lua_highlight_rules").LuaHighlightRules, regex:null},
"luapage": {mode: require("./luapage").Mode, highlightRules:require("./luapage_highlight_rules").LuaPageHighlightRules, regex:null},
"lucene": {mode: require("./lucene").Mode, highlightRules:require("./lucene_highlight_rules").LuceneHighlightRules, regex:null},
"makefile": {mode: require("./makefile").Mode, highlightRules:require("./makefile_highlight_rules").MakefileHighlightRules, regex:null},
"markdown": {mode: require("./markdown").Mode, highlightRules:require("./markdown_highlight_rules").MarkdownHighlightRules, regex:null},
"matlab": {mode: require("./matlab").Mode, highlightRules:require("./matlab_highlight_rules").MatlabHighlightRules, regex:null},
"mysql": {mode: require("./mysql").Mode, highlightRules:require("./mysql_highlight_rules").MysqlHighlightRules, regex:null},
"objectivec": {mode: require("./objectivec").Mode, highlightRules:require("./objectivec_highlight_rules").ObjectiveCHighlightRules, regex:null},
"ocaml": {mode: require("./ocaml").Mode, highlightRules:require("./ocaml_highlight_rules").OcamlHighlightRules, regex:null},
"pascal": {mode: require("./pascal").Mode, highlightRules:require("./pascal_highlight_rules").PascalHighlightRules, regex:null},
"perl": {mode: require("./perl").Mode, highlightRules:require("./perl_highlight_rules").PerlHighlightRules, regex:null},
"pgsql": {mode: require("./pgsql").Mode, highlightRules:require("./pgsql_highlight_rules").PgsqlHighlightRules, regex:null},
"php": {mode: require("./php").Mode, highlightRules:require("./php_highlight_rules").PhpHighlightRules, regex:null},
"powershell": {mode: require("./powershell").Mode, highlightRules:require("./powershell_highlight_rules").PowershellHighlightRules, regex:null},
"prolog": {mode: require("./prolog").Mode, highlightRules:require("./prolog_highlight_rules").PrologHighlightRules, regex:null},
"properties": {mode: require("./properties").Mode, highlightRules:require("./properties_highlight_rules").PropertiesHighlightRules, regex:null},
"python": {mode: require("./python").Mode, highlightRules:require("./python_highlight_rules").PythonHighlightRules, regex:null},
"r": {mode: require("./r").Mode, highlightRules:require("./r_highlight_rules").RHighlightRules, regex:null},
"rdoc": {mode: require("./rdoc").Mode, highlightRules:require("./rdoc_highlight_rules").RDocHighlightRules, regex:null},
"rhtml": {mode: require("./rhtml").Mode, highlightRules:require("./rhtml_highlight_rules").RHtmlHighlightRules, regex:null},
"ruby": {mode: require("./ruby").Mode, highlightRules:require("./ruby_highlight_rules").RubyHighlightRules, regex:null},
"rust": {mode: require("./rust").Mode, highlightRules:require("./rust_highlight_rules").RustHighlightRules, regex:null},
"sass": {mode: require("./sass").Mode, highlightRules:require("./sass_highlight_rules").SassHighlightRules, regex:null},
"scad": {mode: require("./scad").Mode, highlightRules:require("./scad_highlight_rules").scadHighlightRules, regex:null},
"scala": {mode: require("./scala").Mode, highlightRules:require("./scala_highlight_rules").ScalaHighlightRules, regex:null},
"scheme": {mode: require("./scheme").Mode, highlightRules:require("./scheme_highlight_rules").SchemeHighlightRules, regex:null},
"scss": {mode: require("./scss").Mode, highlightRules:require("./scss_highlight_rules").ScssHighlightRules, regex:null},
"sh": {mode: require("./sh").Mode, highlightRules:require("./sh_highlight_rules").ShHighlightRules, regex:null},
"sql": {mode: require("./sql").Mode, highlightRules:require("./sql_highlight_rules").SqlHighlightRules, regex:null},
"stylus": {mode: require("./stylus").Mode, highlightRules:require("./stylus_highlight_rules").StylusHighlightRules, regex:null},
"svg": {mode: require("./svg").Mode, highlightRules:require("./svg_highlight_rules").SvgHighlightRules, regex:null},
"tcl": {mode: require("./tcl").Mode, highlightRules:require("./tcl_highlight_rules").TclHighlightRules, regex:null},
"tex": {mode: require("./tex").Mode, highlightRules:require("./tex_highlight_rules").TexHighlightRules, regex:null},
"text": {mode: require("./text").Mode, highlightRules:require("./text_highlight_rules").TextHighlightRules, regex:null},
"textile": {mode: require("./textile").Mode, highlightRules:require("./textile_highlight_rules").TextileHighlightRules, regex:null},
"toml": {mode: require("./toml").Mode, highlightRules:require("./toml_highlight_rules").TomlHighlightRules, regex:null},
"twig": {mode: require("./twig").Mode, highlightRules:require("./twig_highlight_rules").TwigHighlightRules, regex:null},
"typescript": {mode: require("./typescript").Mode, highlightRules:require("./typescript_highlight_rules").TypeScriptHighlightRules, regex:null},
"vbscript": {mode: require("./vbscript").Mode, highlightRules:require("./vbscript_highlight_rules").VBScriptHighlightRules, regex:null},
"velocity": {mode: require("./velocity").Mode, highlightRules:require("./velocity_highlight_rules").VelocityHighlightRules, regex:null},
"verilog": {mode: require("./verilog").Mode, highlightRules:require("./verilog_highlight_rules").VerilogHighlightRules, regex:null},
"xml": {mode: require("./xml").Mode, highlightRules:require("./xml_highlight_rules").XmlHighlightRules, regex:null},
"yaml": {mode: require("./yaml").Mode, highlightRules:require("./yaml_highlight_rules").YamlHighlightRules, regex:null}

}}});