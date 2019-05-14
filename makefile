BLENDER_ADDON_DIR = ~/Programs/blender-2.80-linux-glibc224-x86_64/2.80/scripts/addons/hui-export
UTILS_DIR = three-utils
BIN = ./node_modules/.bin/

utils:
	cd $(UTILS_DIR) && $(BIN)webpack --mode development
#	cp $(UTILS_DIR)/dst/*.js test/

utils-watch:
		cd $(UTILS_DIR) && $(BIN)webpack --mode development --watch

utils-install-modules:
	cd $(UTILS_DIR) && npm install

addon:
	mkdir -p $(BLENDER_ADDON_DIR)
	cp ./blender-exporter/*.py $(BLENDER_ADDON_DIR)
