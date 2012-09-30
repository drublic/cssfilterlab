module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },

        lint: {
            grunt: ['Gruntfile.js'],
            all: [
                'configs.js',
                'lib/utils/utils.js',
                'lib/utils/event_dispatcher.js',
                'lib/application.js',
                'lib/controls/base_control.js',
                'lib/controls/code_editor.js',
                'lib/controls/multi_control.js',
                'lib/controls/color_control.js',
                'lib/controls/checkbox_control.js',
                'lib/controls/vector_control.js',
                'lib/controls/editable_label.js',
                'lib/controls/range_control.js',
                'lib/controls/transform_control.js',
                'lib/controls/text_control.js',
                'lib/controls/warp_control.js',
                'lib/models/active_object.js',
                'lib/models/animation.js',
                'lib/models/preset_store.js',
                'lib/models/filter_config.js',
                'lib/models/filter.js',
                'lib/models/filter_store.js',
                'lib/models/filter_list.js',
                'lib/models/github.js',
                'lib/models/keyframe.js',
                'lib/utils/angle_lib.js',
                'lib/utils/color_scheme.js',
                'lib/utils/config.js',
                'lib/utils/css_generators.js',
                'lib/utils/local_storage.js',
                'lib/utils/mixers.js',
                'lib/utils/timer.js',
                'lib/utils/warp_helpers.js',
                'lib/views/filter_store_view.js',
                'lib/views/active_filter_list_view.js',
                'lib/views/css_code_view.js',
                'lib/views/filter_item_view.js',
                'lib/views/preset_store_view.js',
                'lib/views/loading_progress_view.js',
                'lib/views/logo_view.js',
                'lib/views/help_view.js',
                'lib/views/import_filter_view.js',
                'lib/views/shader_editor_view.js',
                'lib/views/shader_code_editor_view.js',
                'lib/views/timeline_view.js',
                'lib/views/dock_column.js',
                'lib/views/dock_view.js',
                'lib/views/dock_container.js',
                'lib/views/dock_panel.js'
            ],
            options: {
                options: '<json:.jshintrc>'
            }
        },

        concat: {
            deploy: {
                src: [
                    'lib/third_party/jquery/jquery-1.8.0.min.js',
                    'lib/third_party/jquery/jquery-ui-1.8.23.custom.min.js',
                    'lib/third_party/CodeMirror/lib/codemirror.js',
                    'lib/third_party/CodeMirror/mode/clike/clike.js',
                    '<config:lint.all>'
                ],
                dest: 'dist/js/main-<%= pkg.version %>.min.js'
            }
        },

        min: {
            deploy: {
                src: [
                    '<config_process:meta.banner>',
                    '<config:concat.deploy.dest>'
                ],
                dest: 'dist/js/main-<%= pkg.version %>.min.js'
            }
        },

        watch: {
            html: {
                files: '<config:htmllint.all>',
                tasks: 'htmllint'
            },

            js: {
                files: '<config:lint.all>',
                tasks: 'lint'
            }
        }
    });


    // A task for development
    grunt.registerTask('dev', 'lint');

    // A task for deployment
    grunt.registerTask('deploy', 'lint concat min');

    // Default task
    grunt.registerTask('default', 'lint concat min');

};
