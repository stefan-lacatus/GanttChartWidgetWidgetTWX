﻿TW.IDE.Widgets.ganttChart = function () {
    this.widgetIconUrl = function() {
        return  "../Common/extensions/GanttChartExtension/ui/ganttChart/ganttChart.ide.png";
    };

    this.widgetProperties = function () {
        return {
            'name': 'Gantt Chart',
            'description': 'Displays a gantt chart of tasks and related durations',
            'category': ['Data'],
            'defaultBindingTargetProperty': 'Data',
            'supportsAutoResize': true,
            'properties': {
                'TaskName': {
                    'description': 'Field to use for task name',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
			    'TaskID': {
                    'description': 'Field to use for task ID',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
				'StartDate': {
                    'description': 'Field to use for start date',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
				'EndDate': {
                    'description': 'Field to use for end date',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
			    'Resource': {
                    'description': 'Field to use for resource',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
				'Completed': {
                    'description': 'Field to use to indicate if task is completed',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
				'Relationships': {
                    'description': 'Field to use to indicate relationships of tasks',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
				'Duration': {
                    'description': 'Field to use for duration of task',
                    'baseType': 'FIELDNAME',
                    'sourcePropertyName': 'Data'
                },
                'TooltipField1': {
                    'description' : 'Field which will provide 1st tooltip data',
                    'isBindingTarget': true,
                    'isVisible': true,
                    'isEditable': true,
                    'sourcePropertyName': 'Data',
                    'baseType': 'FIELDNAME'
                },
                'Data': {
                    'description': 'Data source',
                    'isBindingTarget': true,
                    'isEditable': false,
                    'baseType': 'INFOTABLE',
                    'warnIfNotBoundAsTarget': true
                },
				'TrackStyle': {
					'description': 'Style for the Gantt chart tracks',
                    'baseType': 'STYLEDEFINITION',
					'defaultValue' : 'DefaultGanttTrackStyle'
                },				
				'AlternativeTrackStyle': {
					'description': 'Style for the alternative Gantt chart tracks',
                    'baseType': 'STYLEDEFINITION',
					'defaultValue' : 'DefaultAlternativeGanttTrackStyle'
                },
				'ArrowStyle': {
					'description': 'Style for Gantt Chart arrows',
                    'baseType': 'STYLEDEFINITION',
					'defaultValue' : 'DefaultGanttArrowStyle'
				}, 		
				'ItemHeight': {
                    'description': 'Field to use for the element height',
                    'baseType': 'NUMBER',
                    'defaultValue': 23, 
					'isBindingTarget': false
                },
				'BarCornerRadius': {
                    'description': 'Field to use for the bar corner radius',
                    'baseType': 'NUMBER',
                    'defaultValue': 2, 
					'isBindingTarget': false
                },
				'ShowPercentCompletion': {
                    'description': 'Show Percent Completion',
                    'baseType': 'BOOLEAN',
                    'defaultValue': false, 
					'isBindingTarget': false
                },
				'ArrowRadius': {
                    'description': 'Field to use for the arrow radius',
                    'baseType': 'NUMBER',
                    'defaultValue': 5, 
					'isBindingTarget': false
                },
				'ArrowAngle': {
                    'description': 'Field to use for the arrow radius',
                    'baseType': 'NUMBER',
                    'defaultValue': 40, 
					'isBindingTarget': false
                },
				'isResizeable': true			
            }
        };
    };

    this.widgetEvents = function () {
        return {
        	'DoubleClicked': {}, 
        };
    };

    this.renderHtml = function () {
        var html = '';
        html += '<div class="widget-content widget-ganttChart"><table height="100%" width="100%"><tr><td valign="middle" align="center"><span>Gantt Chart</span></td></tr></table></div>';
        return html;
    };

    this.validate = function () {
        var result = [];

       if (this.isPropertyBoundAsTarget('Data')) {
            if (this.getProperty('TaskID') === undefined || this.getProperty('TaskID').length === 0) {
                result.push({ severity: 'warning', message: 'TaskID for {target-id} must be chosen' });
            }
            if (this.getProperty('TaskName') === undefined || this.getProperty('TaskName').length === 0) {
                result.push({ severity: 'warning', message: 'TaskName for {target-id} must be chosen' });
            }
			if (this.getProperty('StartDate') === undefined || this.getProperty('StartDate').length === 0) {
                result.push({ severity: 'warning', message: 'StartDate for {target-id} must be chosen' });
            }
			if (this.getProperty('EndDate') === undefined || this.getProperty('EndDate').length === 0) {
                result.push({ severity: 'warning', message: 'EndDate for {target-id} must be chosen' });
            }
        } 

        return result;
    };
};
