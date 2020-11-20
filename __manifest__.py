# -*- coding: utf-8 -*-
{
    'name': 'odoo引入echarts',
    'version': '1.1',
    'description': '',
    'author': 'Musk',
    'depends': [],
    'data': [
        'views/include_js.xml',
        'views/home_view.xml',
    ],
    'qweb': [
        'static/src/xml/load_echarts_map.xml',
        'static/src/xml/load_echarts_complaint.xml',
    ],
}
