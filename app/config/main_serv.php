<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'WEPanel',

	// preloading 'log' component
	'preload'=>array('log'),

	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.components.*',
	),

	'modules'=>array(
		// uncomment the following to enable the Gii tool
		
		'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>'sko62267',
		 	// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array('127.0.0.3','::1'),
		),
		
	),

	// application components
	'components'=>array(
	     'thumb'=>array(
         'class'=>'ext.CThumbCreator.CThumbCreator',
			),
		'browser' => array(
			'class' => 'application.extensions.browser.CBrowserComponent',
			),
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
			'loginUrl'=>array('/wepanel/login'),
		),
		
		// uncomment the following to enable URLs in path-format
		
	'urlManager'=>array(
            'showScriptName' => false,  // что бы не цеплялся index.php к ссылкам
            'urlFormat'=>'path',
            'rules'=>array(
				'wepanel/<action:\w+>' => 'wepanel/<action>',
				'wepanel' => 'wepanel/index',
				
				'about/testimonials' => 'site/guestbook/url/testimonials/parenturl/about',
				
				'portfolio' => 'site/portfolio/url/portfolio',
				'portfolio/<page>.html' => 'site/portfoliopage/url/portfolio',
				'portfolio/<tag>' => 'site/portfolio/url/portfolio',
				
				'journal' => 'site/journal/url/journal',
				'journal/<page>.html' => 'site/journalpage/url/journal',
				'journal/<tag>' => 'site/journal/url/journal',
				
				'map' => 'site/map',
				'search' => 'site/search',
				
				'sendmail' => 'site/sendmail',
				
				'<url>'=>'site/section',
				'<parenturl>/<url>/'=>'site/section',
				'<parenturl>/<secondurl>/<url>'=>'site/section',
				//'wepanel/'=>'wepanel/login',
                //'post/<url>/'=>'post/view',
                //'members/view/<member>' => 'members/view',
                //'post/page/<page>' => 'post/index',
                //'tag/<tag>' => 'tag/view',
                //'search/page/<page>/q/<q>' => 'search/index',
                //'search/q/<q>' => 'search/index',
                //'post' => 'post/index'
				),
            ),
		/*
		'db'=>array(
			'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
		),
		* */
		// uncomment the following to use a MySQL database
		
		'db'=>array(
			'connectionString' => 'mysql:host=localhost;dbname=skarah_skarah',
			'emulatePrepare' => true,
			'username' => 'skarah_vsud',
			'password' => 'sko62267',
			'charset' => 'utf8',
		),
		
		'errorHandler'=>array(
			// use 'site/error' action to display errors
            'errorAction'=>'site/error',
        ),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
				// uncomment the following to show log messages on web pages
				/*
				array(
					'class'=>'CWebLogRoute',
				),
				*/
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'adminEmail'=>'skarah@mail.ru',
		'siteUrl'=>'http://skarah.ru',
		'thumbPrefix'=>'thumb_',
		'thumbDir'=>'/content/',
		'thumbWidth'=>100,
		'thumbHeight'=>100,
	),
);
