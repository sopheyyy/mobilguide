CREATE TABLE `guidePreferences` (
	`installationId` varchar(64) NOT NULL,
	`phoneType` enum('unknown','iphone','android') NOT NULL DEFAULT 'unknown',
	`textSize` int NOT NULL DEFAULT 0,
	`favorites` text NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `guidePreferences_installationId` PRIMARY KEY(`installationId`)
);
