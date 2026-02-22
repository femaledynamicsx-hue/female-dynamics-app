$downloads = [Environment]::GetFolderPath('UserProfile') + '\Downloads'
$s = Get-ChildItem -Path $downloads -Filter 'IMG_8292*.webp' | Select-Object -ExpandProperty FullName -First 1
$desktop = [Environment]::GetFolderPath('Desktop')
$tgtDir = Get-ChildItem -Path $desktop -Filter '*dating-platform' -Recurse -Directory -ErrorAction SilentlyContinue | Select-Object -ExpandProperty FullName -First 1
$dest = Join-Path -Path $tgtDir -ChildPath 'public\founder-collage.webp'
Copy-Item -Path $s -Destination $dest -Force
