$files = Get-ChildItem -Filter *.html
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw
    if ($c -notmatch 'favicon\.png') {
        $c = $c -replace '<link rel="stylesheet" href="src/css/style\.css">', "<link rel=`"stylesheet`" href=`"src/css/style.css`">`r`n    <link rel=`"icon`" type=`"image/png`" href=`"src/img/favicon.png`">"
        [IO.File]::WriteAllText($f.FullName, $c)
    }
}
