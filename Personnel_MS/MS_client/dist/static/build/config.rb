require 'compass/import-once/activate'

# Require any additional compass plugins here.


# 去掉缓存 .sass-cache文件夹
#cache = false

$dir = '../';
# Set this to the root of your project when deployed:
http_path = "./"
css_dir = $dir + "css"
sass_dir = $dir + "sass"
images_dir = $dir +  "img"
javascripts_dir = $dir + "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
 output_style = :compressed
# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
 #line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass


#asset_cache_buster :none

# 这里做了一个 copy 而不是直接重命名；你可以用 FileUtils.mv 直接重命名
on_sprite_saved do |icon|
  if File.exists?(icon)
    #FileUtils.mv icon, icon.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
    #使用mv删除图片会使每次修改时都会重新生成图片.所以不建议使用
    FileUtils.cp icon, icon.gsub(%r{-s[a-z0-9]{10}\.png$}, '-sprite.png')
  end
end

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
on_stylesheet_saved do |icon|
  if File.exists?(icon)
    css = File.read icon
    File.open(icon, 'w+') do |f|
      f << css.gsub(%r{-s([a-z0-9]{10})\.png}, '-sprite.png?v=\1')
    end
  end
end
Encoding.default_external = "utf-8"